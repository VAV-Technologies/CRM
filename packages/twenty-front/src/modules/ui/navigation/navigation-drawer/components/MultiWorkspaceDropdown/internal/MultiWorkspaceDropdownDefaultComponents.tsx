import { DEFAULT_WORKSPACE_LOGO } from '@/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';

import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { DropdownContent } from '@/ui/layout/dropdown/components/DropdownContent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useLingui } from '@lingui/react/macro';
import { Avatar, IconSwitchHorizontal } from 'twenty-ui/display';
import { MenuItem, MenuItemSelectAvatar } from 'twenty-ui/navigation';

// Nobridge: pared down to mirror the Nobridge Finance workspace switcher — the
// current workspace (selected) and the cross-app switch link. Theme, Invite,
// Settings, workspace creation, and Log out all live in Settings.
export const MultiWorkspaceDropdownDefaultComponents = () => {
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);
  const { t } = useLingui();

  return (
    <DropdownContent widthInPixels={240}>
      <DropdownMenuItemsContainer>
        <MenuItemSelectAvatar
          text={currentWorkspace?.displayName ?? ''}
          avatar={
            <Avatar
              placeholder={currentWorkspace?.displayName || ''}
              avatarUrl={currentWorkspace?.logo ?? DEFAULT_WORKSPACE_LOGO}
            />
          }
          selected={true}
        />
      </DropdownMenuItemsContainer>
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer>
        <MenuItem
          LeftIcon={IconSwitchHorizontal}
          text={t`Switch to Nobridge Finance`}
          onClick={() => {
            window.location.href = '/finance';
          }}
        />
      </DropdownMenuItemsContainer>
    </DropdownContent>
  );
};
