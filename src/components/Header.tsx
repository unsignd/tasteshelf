import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 fixed flex items-center justify-between px-10 z-10">
      <p
        className="cursor-pointer hover:underline"
        onClick={() => navigate('/')}
      >
        tasteshelf.com
      </p>
      <p>0 products indexed</p>
    </div>
  );
}
