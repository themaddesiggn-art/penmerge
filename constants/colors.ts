/**
 * PenMerge Brand Color Tokens
 * Source of Truth for all color usage across the website
 * 
 * These semantic tokens map to the official PenMerge brand palette:
 * - Deep Green (#12312B) - Primary brand anchor
 * - Warm Gold (#D8A34E) - Refined accent (use sparingly)
 * - Warm Ivory (#EAE0C8) - Premium editorial background
 * - Soft Cream (#F4EEE1) - Light editorial background
 * - White (#FFFFFF) - Clarity and contrast
 */

export const brandColors = {
  // Core brand colors
  green: '#12312B',
  greenLight: '#1A3F38',
  greenLighter: '#234A42',
  greenPale: '#E8F1F0',
  
  gold: '#D8A34E',
  goldDark: '#B8852F',
  goldLight: '#E5B866',
  goldLighter: '#F0D4A0',
  goldPale: '#FAF6F0',
  
  ivory: '#EAE0C8',
  ivoryLight: '#F5F0E5',
  
  cream: '#F4EEE1',
  creamLight: '#FAFBF8',
  
  white: '#FFFFFF',
  
  // Text colors
  textPrimary: '#10231F',
  textSecondary: '#53615D',
  textMuted: '#8B9A95',
  textInverse: '#FFFFFF',
  
  // Borders
  border: '#D9D1BC',
  borderLight: '#E8E3D4',
  borderLighter: '#F0EBE0',
  
  // States
  success: '#2D6A5F',
  warning: '#C89A3E',
  error: '#8B4C3A',
  info: '#2A4A44',
} as const

export const semanticTokens = {
  surface: {
    base: brandColors.white,
    elevated: brandColors.cream,
    warm: brandColors.ivory,
    alt: brandColors.ivoryLight,
  },
  
  text: {
    primary: brandColors.textPrimary,
    secondary: brandColors.textSecondary,
    muted: brandColors.textMuted,
    inverse: brandColors.textInverse,
  },
  
  primary: {
    default: brandColors.green,
    dark: '#0A1F1B',
    light: brandColors.greenLight,
    lighter: brandColors.greenLighter,
    pale: brandColors.greenPale,
  },
  
  accent: {
    default: brandColors.gold,
    dark: brandColors.goldDark,
    light: brandColors.goldLight,
    lighter: brandColors.goldLighter,
    pale: brandColors.goldPale,
  },
  
  border: {
    default: brandColors.border,
    light: brandColors.borderLight,
    lighter: brandColors.borderLighter,
  },
  
  state: {
    success: brandColors.success,
    warning: brandColors.warning,
    error: brandColors.error,
    info: brandColors.info,
  },
} as const

/**
 * Usage Examples:
 * 
 * import { brandColors, semanticTokens } from '@/constants/colors'
 * 
 * // Direct brand colors
 * color: brandColors.green
 * backgroundColor: brandColors.cream
 * 
 * // Semantic tokens (preferred)
 * color: semanticTokens.text.primary
 * backgroundColor: semanticTokens.surface.warm
 */
