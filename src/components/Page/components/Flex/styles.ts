import styled, { css } from 'styled-components'

/**
 * Flex properties.
 */
type FlexProps = {
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'

  flexWrap?: 'wrap'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
  flexDirection?: 'row' | 'column'

  width?: number | string
  height?: number | string
  background?: 'white' | 'tertiary-light' | 'black'

  borderRadius?: number

  margin?: {
    all?: number
    top?: number
    left?: number
    right?: number
    bottom?: number
  }

  padding?: {
    all?: number
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ width }) =>
    width &&
    css`
      width: ${Number.isFinite(width) ? `${width}px` : width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${Number.isFinite(height) ? `${height}px` : height};
    `}
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius}px;
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
  /**
   * Margin.
   */
  ${({ margin }) =>
    margin &&
    margin.top &&
    css`
      margin-top: ${margin.top}px;
    `}
  ${({ margin }) =>
    margin &&
    margin.left &&
    css`
      margin-left: ${margin.left}px;
    `}
  ${({ margin }) =>
    margin &&
    margin.right &&
    css`
      margin-right: ${margin.right}px;
    `}
  ${({ margin }) =>
    margin &&
    margin.bottom &&
    css`
      margin-bottom: ${margin.bottom}px;
    `}
  ${({ margin }) =>
    margin &&
    margin.all &&
    css`
      margin: ${margin.all}px;
    `}
  /**
   * Padding.
   */
   ${({ padding }) =>
    padding &&
    padding.top &&
    css`
      padding-top: ${padding.top}px;
    `}
  ${({ padding }) =>
    padding &&
    padding.left &&
    css`
      padding-left: ${padding.left}px;
    `}
  ${({ padding }) =>
    padding &&
    padding.right &&
    css`
      padding-right: ${padding.right}px;
    `}
  ${({ padding }) =>
    padding &&
    padding.bottom &&
    css`
      padding-bottom: ${padding.bottom}px;
    `}
  ${({ padding }) =>
    padding &&
    padding.all &&
    css`
      padding: ${padding.all}px;
    `}
  /**
   * Background.
   */
  ${({ background, theme }) => {
    if (!background) return
    /**
     * Mapped background.
     */
    const mappedBackground = {
      black: theme.colors.black,
      white: theme.colors.white,
      'tertiary-light': theme.colors.tertiaryLight
    }
    return css`
      background-color: ${mappedBackground[background]};
    `
  }}
`
