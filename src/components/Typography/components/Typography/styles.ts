import styled, { css, DefaultTheme } from 'styled-components'

/**
 * Types.
 */
import { TypographyProps } from './'

/**
 * Props definition to style.
 */
export type StyledProps = Exclude<TypographyProps, 'variant' | 'children'>

/**
 * Default style.
 */
const defaultStyle = (props: StyledProps & { theme: DefaultTheme }) => {
  /**
   * Extract props.
   */
  const {
    theme,
    isBlack,
    isUpper,
    isWhite,
    fontSize,
    isPrimary,
    alignment,
    fontWeight,
    lineHeight,
    isTertiary,
    isSecondary,
    isLineThrough,
    isPrimaryLight,
    isTertiaryLight,
    isSecondaryLight
  } = props

  return css`
    color: ${theme.colors.secondary};
    font-size: ${fontSize}rem;
    text-align: ${alignment};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    ${isUpper && 'text-transform: uppercase;'}
    ${isLineThrough && 'text-decoration: line-through;'}
    ${isWhite && `color: ${theme.colors.white};`}
    ${isBlack && `color: ${theme.colors.black};`}
    ${isPrimary && `color: ${theme.colors.primary};`}
    ${isTertiary && `color: ${theme.colors.tertiary};`}
    ${isSecondary && `color: ${theme.colors.secondary};`}
    ${isPrimaryLight && `color: ${theme.colors.primaryLight};`}
    ${isTertiaryLight && `color: ${theme.colors.tertiaryLight};`}
    ${isSecondaryLight && `color: ${theme.colors.secondaryLight};`}
  `
}

export const Paragraph = styled.p<StyledProps>`
  ${defaultStyle}
`

export const H1 = styled.h1<StyledProps>`
  ${defaultStyle}
`

export const H2 = styled.h2<StyledProps>`
  ${defaultStyle}
`

export const H3 = styled.h3<StyledProps>`
  ${defaultStyle}
`

export const Span = styled.span<StyledProps>`
  ${defaultStyle}
`
