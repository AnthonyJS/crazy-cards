import { Normalize } from 'styled-normalize'
import React from 'react'

const normalizeDecorator = storyFn => (
  <>
    <Normalize />
    {storyFn()}
  </>
)

export default normalizeDecorator
