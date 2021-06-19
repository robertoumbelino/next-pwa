import { ReactNode } from 'react'

/**
 * Styles.
 */
import { H1, H2, H3, Span, Paragraph } from './styles'

/**
 * Typography properties.
 */
export type TypographyProps = {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
  children: ReactNode

  isUpper?: boolean
  fontSize?: number
  alignment?: 'center' | 'left' | 'right' | 'justify'
  fontWeight?: 'normal' | 'medium' | 'bolder' | 'bold' | 500
  lineHeight?: number
  isLineThrough?: boolean

  isBlack?: boolean
  isWhite?: boolean
  isPrimary?: boolean
  isTertiary?: boolean
  isSecondary?: boolean
  isPrimaryLight?: boolean
  isTertiaryLight?: boolean
  isSecondaryLight?: boolean
}

/**
 * Typography variants.
 */
const variants = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  span: Span
}

/**
 * Component.
 */
export function Typography({
  variant = 'span',
  children,

  isUpper = false,
  fontSize = 1,
  alignment = 'center',
  fontWeight = 'normal',
  lineHeight = 1.5,
  isLineThrough = false,

  isBlack,
  isWhite,
  isPrimary,
  isTertiary,
  isSecondary,
  isPrimaryLight,
  isTertiaryLight,
  isSecondaryLight
}: TypographyProps) {
  /**
   * Get variant tag.
   */
  const Variant = variants[variant]

  return (
    <Variant
      isUpper={isUpper}
      fontSize={fontSize}
      alignment={alignment}
      fontWeight={fontWeight}
      isLineThrough={isLineThrough}
      isBlack={isBlack}
      isWhite={isWhite}
      isPrimary={isPrimary}
      lineHeight={lineHeight}
      isTertiary={isTertiary}
      isSecondary={isSecondary}
      isPrimaryLight={isPrimaryLight}
      isTertiaryLight={isTertiaryLight}
      isSecondaryLight={isSecondaryLight}
    >
      {children}
    </Variant>
  )
}
