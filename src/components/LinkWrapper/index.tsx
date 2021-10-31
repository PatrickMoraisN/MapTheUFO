import Link from 'next/link';
import * as S from './style';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
  textLabel: string;
};

function LinkWrapper({ href, children, textLabel }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>
        <span>{textLabel}</span>
      </Link>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
}

export default LinkWrapper;
