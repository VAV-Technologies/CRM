import { DropdownContent } from '@/ui/layout/dropdown/components/DropdownContent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useLingui } from '@lingui/react/macro';
import { IconSwitchHorizontal } from 'twenty-ui/display';
import { MenuItem, MenuItemSelectAvatar } from 'twenty-ui/navigation';

// Nobridge: the brand button above shows the Nobridge logo + "Nobridge"; this
// dropdown just disambiguates which app you're in (text-only, ticked) and offers
// the cross-app switch. Theme, Invite, Settings, and Log out all live in Settings.
export const MultiWorkspaceDropdownDefaultComponents = () => {
  const { t } = useLingui();

  return (
    <DropdownContent widthInPixels={240}>
      <DropdownMenuItemsContainer>
        <MenuItemSelectAvatar text="Nobridge Operations" selected={true} />
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
