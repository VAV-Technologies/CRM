import { type IconComponent } from '@ui/display/icon/types/IconComponent';
import { StyledTintedIconTileContainer } from '@ui/display/tinted-icon-tile/components/StyledTintedIconTileContainer';
import { getIconTileColorShades } from '@ui/display/tinted-icon-tile/utils/getIconTileColorShades';
import { DEFAULT_THEME_COLOR_FALLBACK } from '@ui/theme';
import { ThemeContext } from '@ui/theme-constants';
import { useContext } from 'react';
import { isDefined } from 'twenty-shared/utils';

export type TintedIconTileProps = {
  Icon: IconComponent;
  color?: string | null;
  size?: number;
  stroke?: number;
  // Sizes the surrounding tile independently of the icon, so the box can be
  // larger than the glyph (padded look). Falls back to size, then the default.
  containerSize?: number;
};

export const TintedIconTile = ({
  Icon,
  color = DEFAULT_THEME_COLOR_FALLBACK,
  size: sizeFromProps,
  stroke: strokeFromProps,
  containerSize: containerSizeFromProps,
}: TintedIconTileProps) => {
  const { theme } = useContext(ThemeContext);
  const style = getIconTileColorShades(color);
  const iconSize = sizeFromProps ?? theme.icon.size.md;
  const iconStroke = strokeFromProps ?? theme.icon.stroke.md;
  const tileDimension = isDefined(containerSizeFromProps)
    ? `${containerSizeFromProps}px`
    : isDefined(sizeFromProps)
      ? `${sizeFromProps}px`
      : undefined;

  return (
    <StyledTintedIconTileContainer
      $backgroundColor={style.backgroundColor}
      $borderColor={style.borderColor}
      $dimension={tileDimension}
    >
      <Icon size={iconSize} stroke={iconStroke} color={style.iconColor} />
    </StyledTintedIconTileContainer>
  );
};
