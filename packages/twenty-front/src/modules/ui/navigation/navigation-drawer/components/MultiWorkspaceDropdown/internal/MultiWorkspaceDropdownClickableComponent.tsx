import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import {
  StyledContainer,
  StyledIconChevronDown,
  StyledLabel,
  StyledLabelWrapper,
} from '@/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/internal/MultiWorkspacesDropdownStyles';
import { NavigationDrawerAnimatedCollapseWrapper } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerAnimatedCollapseWrapper';
import { DEFAULT_WORKSPACE_LOGO } from '@/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';
import { isNavigationDrawerExpandedState } from '@/ui/navigation/states/isNavigationDrawerExpanded';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useContext } from 'react';
import { Avatar } from 'twenty-ui/display';
import { ThemeContext } from 'twenty-ui/theme-constants';

type MultiWorkspaceDropdownClickableComponentProps = {
  disabled?: boolean;
};

export const MultiWorkspaceDropdownClickableComponent = ({
  disabled,
}: MultiWorkspaceDropdownClickableComponentProps) => {
  const { theme } = useContext(ThemeContext);
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);

  const isNavigationDrawerExpanded = useAtomStateValue(
    isNavigationDrawerExpandedState,
  );
  return (
    <StyledContainer
      data-testid="workspace-dropdown"
      isNavigationDrawerExpanded={isNavigationDrawerExpanded}
      disabled={disabled}
    >
      {/* Always use the bundled static Nobridge logo. The in-app workspace-logo
          uploader is unreliable on v2.7.3 (it deletes the prior file on each
          upload and the client caches the now-dead URL), so the brand must not
          depend on workspace.logo. Static asset = bulletproof, matches Finance. */}
      <Avatar
        placeholder={currentWorkspace?.displayName || ''}
        avatarUrl={DEFAULT_WORKSPACE_LOGO}
        size="lg"
      />
      <StyledLabelWrapper>
        <NavigationDrawerAnimatedCollapseWrapper>
          <StyledLabel>{currentWorkspace?.displayName ?? ''}</StyledLabel>
        </NavigationDrawerAnimatedCollapseWrapper>
      </StyledLabelWrapper>
      <NavigationDrawerAnimatedCollapseWrapper>
        <StyledIconChevronDown
          size={theme.icon.size.md}
          stroke={theme.icon.stroke.sm}
        />
      </NavigationDrawerAnimatedCollapseWrapper>
    </StyledContainer>
  );
};
