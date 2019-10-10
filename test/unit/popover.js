import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Popover from '../../src/popover'

chai.use(sinonChai)

describe('Popover', () => {

  it('����.', () => {
    expect(Popover).to.exist
  })

  it('��������position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>����</button>`},
        content: '<div>��������</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom')
  })
  it('�������� trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>����</button>`},
        content: '<div>��������</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    expect(wrapper.find('.content-wrapper').element).to.exist

  })

})