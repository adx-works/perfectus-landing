<template>
  <div class="accessibility-panel" :class="{ 'panel-open': isPanelOpen }">
    <button 
      class="accessibility-toggle"
      @click="togglePanel"
      :aria-label="isPanelOpen ? 'Закрыть панель доступности' : 'Открыть панель доступности'"
    >
      <Eye :size="24" />
    </button>

    <div class="accessibility-controls" v-show="isPanelOpen">
      <div class="controls-toolbar">
        <div class="toolbar-group">
          <span class="toolbar-label">Размер шрифта</span>
          <div class="font-controls">
            <button @click="changeFontSize('small')" :class="{ active: fontSize === 'small' }">A</button>
            <button @click="changeFontSize('normal')" :class="{ active: fontSize === 'normal' }">A</button>
            <button @click="changeFontSize('large')" :class="{ active: fontSize === 'large' }">A</button>
          </div>
        </div>

        <div class="toolbar-group">
          <label class="toolbar-checkbox">
            <input 
              type="checkbox" 
              v-model="settings.removeImages" 
              @change="toggleImages"
            >
            Отключить изображения
          </label>
        </div>

        <div class="toolbar-group">
          <span class="toolbar-label">Цветовая схема</span>
          <div class="color-scheme-controls">
            <button 
              @click="changeColorScheme('b')" 
              :class="{ active: colorScheme === 'b' }"
              title="Черный на белом"
              aria-label="Черный на белом"
            >Б</button>
            <button 
              @click="changeColorScheme('ch')" 
              :class="{ active: colorScheme === 'ch' }"
              title="Белый на черном"
              aria-label="Белый на черном"
            >Ч</button>
            <button 
              @click="changeColorScheme('g')" 
              :class="{ active: colorScheme === 'g' }"
              title="Темно-синий на голубом"
              aria-label="Темно-синий на голубом"
            >Г</button>
            <button 
              @click="changeColorScheme('zh')" 
              :class="{ active: colorScheme === 'zh' }"
              title="Коричневый на бежевом"
              aria-label="Коричневый на бежевом"
            >Ж</button>
            <button 
              @click="changeColorScheme('z')" 
              :class="{ active: colorScheme === 'z' }"
              title="Зеленый на темно-коричневом"
              aria-label="Зеленый на темно-коричневом"
            >З</button>
          </div>
        </div>

        <div class="toolbar-group toolbar-actions">
          <button class="hide-panel-btn" @click="togglePanel">
            Скрыть панель
          </button>
          <button class="normal-version-btn" @click="resetSettings">
            Обычная версия
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { Eye } from 'lucide-vue-next'

const route = useRoute()

const isPanelOpen = ref(false)
const fontSize = ref('normal')
const colorScheme = ref('normal')

const settings = reactive({
  removeImages: false
})

let imageReplacements = []

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value
}

const changeFontSize = (size) => {
  fontSize.value = size
  applyFontSize()
}

const changeColorScheme = (scheme) => {
  colorScheme.value = scheme
  applyColorScheme()
}

const toggleImages = () => {
  applyImageSettings()
}

const applySettings = () => {
  applyFontSize()
  applyColorScheme()
  applyImageSettings()
}

const applyFontSize = () => {
  const body = document.body
  body.classList.remove('font-small', 'font-normal', 'font-large')
  body.classList.add(`font-${fontSize.value}`)
}

const applyColorScheme = () => {
  const body = document.body
  body.classList.remove(
    'color-b', 'color-ch', 'color-g', 'color-zh', 'color-z',
    'color-normal'
  )
  if (colorScheme.value === 'normal') {
    body.classList.add('color-normal')
  } else {
    body.classList.add(`color-${colorScheme.value}`)
  }
}

const applyImageSettings = () => {
  if (settings.removeImages) {
    document.body.classList.add('hide-images')
    replaceImagesWithAlt()
  } else {
    document.body.classList.remove('hide-images')
    restoreImages()
  }
}

const replaceImagesWithAlt = () => {
  restoreImages()
  imageReplacements = []
  
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    const alt = img.getAttribute('alt') || img.getAttribute('title') || '[Изображение без описания]'
    const span = document.createElement('span')
    span.className = 'img-alt-replacement'
    span.textContent = alt
    span.setAttribute('role', 'img')
    
    img.style.display = 'none'
    img.setAttribute('data-alt-replacement', 'true')
    
    if (img.parentNode) {
      img.parentNode.insertBefore(span, img.nextSibling)
      imageReplacements.push({ img, span })
    }
  })
}

const restoreImages = () => {
  imageReplacements.forEach(({ img, span }) => {
    img.style.display = ''
    img.removeAttribute('data-alt-replacement')
    if (span.parentNode) {
      span.parentNode.removeChild(span)
    }
  })
  imageReplacements = []
}

const resetSettings = () => {
  localStorage.removeItem('accessibility-settings')
  restoreImages()
  const body = document.body
  body.classList.remove(
    'font-small', 'font-normal', 'font-large',
    'color-b', 'color-ch', 'color-g', 'color-zh', 'color-z',
    'color-normal', 'hide-images', 'accessibility-panel-open'
  )
  window.location.reload()
}

onMounted(() => {
  const saved = localStorage.getItem('accessibility-settings')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      fontSize.value = parsed.fontSize || 'normal'
      colorScheme.value = parsed.colorScheme || 'normal'
      settings.removeImages = parsed.removeImages || false
      applySettings()
    } catch (e) {
      console.warn('Failed to parse accessibility settings', e)
    }
  }
})

onUnmounted(() => {
  document.body.classList.remove('accessibility-panel-open')
  restoreImages()
})

watch([fontSize, colorScheme, () => settings.removeImages], () => {
  const toSave = {
    fontSize: fontSize.value,
    colorScheme: colorScheme.value,
    removeImages: settings.removeImages
  }
  localStorage.setItem('accessibility-settings', JSON.stringify(toSave))
}, { deep: true })

watch(isPanelOpen, (open) => {
  if (open) {
    document.body.classList.add('accessibility-panel-open')
  } else {
    document.body.classList.remove('accessibility-panel-open')
  }
})

watch(() => route.path, () => {
  if (settings.removeImages) {
    setTimeout(() => replaceImagesWithAlt(), 100)
  }
})
</script>

<style scoped>
.accessibility-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  font-family: Arial, sans-serif;
}

.accessibility-toggle {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .accessibility-toggle {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 10px;
  }
}

.accessibility-toggle:hover {
  background: #1d4ed8;
}

.accessibility-controls {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 2px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 9998;
  padding: 16px 24px;
  margin-top: 0;
}

.controls-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-label {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.toolbar-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
}

.toolbar-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

.font-controls {
  display: flex;
  gap: 4px;
}

.font-controls button {
  background: #f3f4f6;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s ease;
}

.font-controls button:first-child {
  font-size: 0.85rem;
}

.font-controls button:nth-child(2) {
  font-size: 1rem;
}

.font-controls button:nth-child(3) {
  font-size: 1.2rem;
}

.font-controls button.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.font-controls button:hover:not(.active) {
  background: #e5e7eb;
  border-color: #9ca3af;
}

.color-scheme-controls {
  display: flex;
  gap: 4px;
}

.color-scheme-controls button {
  width: 36px;
  height: 36px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.2s ease;
}

.color-scheme-controls button:nth-child(1) {
  background: #fff;
  color: #000;
}

.color-scheme-controls button:nth-child(2) {
  background: #000;
  color: #fff;
}

.color-scheme-controls button:nth-child(3) {
  background: #87ceeb;
  color: #000d4d;
}

.color-scheme-controls button:nth-child(4) {
  background: #f5f5dc;
  color: #5c4033;
}

.color-scheme-controls button:nth-child(5) {
  background: #3d2914;
  color: #90ee90;
}

.color-scheme-controls button.active {
  box-shadow: 0 0 0 3px #2563eb;
  transform: scale(1.05);
}

.color-scheme-controls button:hover:not(.active) {
  transform: scale(1.05);
}

.toolbar-actions {
  margin-left: auto;
}

.hide-panel-btn,
.normal-version-btn {
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}

.additional-btn {
  background: #f3f4f6;
  border: 2px solid #d1d5db;
  color: #374151;
}

.hide-panel-btn {
  background: #f3f4f6;
  border: 2px solid #d1d5db;
  color: #374151;
}

.hide-panel-btn:hover {
  background: #e5e7eb;
}

.normal-version-btn {
  background: #2563eb;
  border: 2px solid #2563eb;
  color: white;
}

.normal-version-btn:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

@media (max-width: 768px) {
  .controls-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .toolbar-actions {
    margin-left: 0;
    width: 100%;
  }
  
  .toolbar-actions button {
    flex: 1;
  }
}
</style>