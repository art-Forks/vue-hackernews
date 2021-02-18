import {shallowMount} from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'
import Vue from "vue";

describe('ProgressBar.vue', () => {
  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%') // #A
  })

  test('displays the bar when start is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    wrapper.vm.start()
    await Vue.nextTick()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    await Vue.nextTick()
    expect(wrapper.element.style.width).toBe('100%')
  })


  test('hides the bar when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    await Vue.nextTick()
    expect(wrapper.classes()).toContain('hidden')
  })


  test('resets to 0% width when start is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.finish()
    wrapper.vm.start()
    await Vue.nextTick()
    expect(wrapper.element.style.width).toBe('0%')
  })
})
