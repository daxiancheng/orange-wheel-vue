Skip to content
Search or jump to��

Pull requests
Issues
Marketplace
Explore
 import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Button from '../../src/button/button'
chai.use(sinonChai)

describe('Button.vue', () => {
  it('����.', () => {
    expect(Button).to.exist
  })
  it('��������icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-settings')
  })
  it('��������loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const vm = wrapper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
  })

  it('icon Ĭ�ϵ� order �� 1', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
  })

  it('���� iconPosition ���Ըı� order', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
  })
  it('��� button ���� click �¼�', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm


    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})
