import { useAuth } from "../../hooks/auth";
import { GoogleButton, UserInfo } from "./styles";
import { X as CloseIcon } from "phosphor-react";
import googleSvg from "../../assets/google.svg";

export function SocialSignInButton() {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <>
      {!user ? (
        <GoogleButton onClick={signInWithGoogle}>
          <img src={googleSvg} alt="Entrar com Google" /> Entrar com Google
        </GoogleButton>
      ) : (
        <UserInfo onClick={signOut}>
          <img src={`${user.photo}`} alt="Foto do usuário" />
          {user.name}
          <CloseIcon size={16} />
        </UserInfo>
      )}
    </>
  );
}
