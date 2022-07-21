import React from 'react'
import Button from 'react-bootstrap/Button';

export default function SıgnedOut({signIn}) {
  return (
    <div>
         <Button onClick={signIn}>Giriş Yap</Button>
         <Button>Kayıt Ol</Button>
    </div>
  )
}
