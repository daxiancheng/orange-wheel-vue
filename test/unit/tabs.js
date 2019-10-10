import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Tabs from '../../src/tabs/tabs'
chai.use(sinonChai)

describe('Tabs.vue', () => {
  it('´æÔÚ.', () => {
    expect(Tabs).to.exist
  })
})