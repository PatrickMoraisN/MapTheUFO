import Link from 'next/link';
import * as S from './style';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
}

export default LinkWrapper;
