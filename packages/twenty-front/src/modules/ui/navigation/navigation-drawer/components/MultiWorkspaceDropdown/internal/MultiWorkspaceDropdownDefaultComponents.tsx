import { DEFAULT_WORKSPACE_LOGO } from '@/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';

import { useAuth } from '@/auth/hooks/useAuth';
import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { DropdownContent } from '@/ui/layout/dropdown/components/DropdownContent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useLingui } from '@lingui/react/macro';
import { Avatar, IconLogout, IconSwitchHorizontal } from 'twenty-ui/display';
import { MenuItem, MenuItemSelectAvatar } from 'twenty-ui/navigation';

// Nobridge: this dropdown is intentionally pared down to mirror the Nobridge
// Finance workspace switcher — current workspace (selected), the cross-app
// switch link, and Log out. Theme/Invite/Settings live in Settings; workspace
// creation is disabled (single-workspace), so the stock items were removed.
export const MultiWorkspaceDropdownDefaultComponents = () => {
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);
  const { t } = useLingui();
  const { signOut } = useAuth();

  return (
    <DropdownContent>
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
        <MenuItem LeftIcon={IconLogout} text={t`Log out`} onClick={signOut} />
      </DropdownMenuItemsContainer>
    </DropdownContent>
  );
};
