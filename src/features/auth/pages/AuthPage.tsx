import React, { useEffect, useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { isLineInAppBrowser } from '../../common/utils/browser';
import { LineInAppBrowserModal } from '../../common/components/modal/LineInAppBrowserModal';

export const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url');
  const afterAuthUrl = redirectUrl ? decodeURIComponent(redirectUrl) : '/mypage';
  const [isLineInApp, setIsLineInApp] = useState(false);

  useEffect(() => {
    const isLine = isLineInAppBrowser();
    setIsLineInApp(isLine);
  }, []);

  // LINEのアプリ内ブラウザの場合は警告モーダルのみ表示
  if (isLineInApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LineInAppBrowserModal isOpen={true} />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4">
      <SignIn 
        routing="path"
        path="/sign-in"
        afterSignInUrl={afterAuthUrl}
        appearance={{
          elements: {
            rootBox: "mx-auto w-full max-w-md",
            card: "rounded-xl shadow-sm"
          }
        }}
      />
      <SignUp
        routing="path"
        path="/sign-up"
        afterSignUpUrl={afterAuthUrl}
        appearance={{
          elements: {
            rootBox: "mx-auto w-full max-w-md",
            card: "rounded-xl shadow-sm"
          }
        }}
      />
    </div>
  );
}; 