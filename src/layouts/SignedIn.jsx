import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react';

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/AOh-ky1oGsXh-FMuz3p2DEeKAdwWpqcxPQ11jUwFb3cu2yw=s32-c-mo" />
        <Dropdown pointing="top left" text='Mehmet'>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut}  text="Çıkış Yap" icon="sign-out"  />

          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  )
}
