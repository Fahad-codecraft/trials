'use client';
import React, { useState } from 'react';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import TextClipFooter from './TextClipFooter';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "devnikarfahad@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className='footer flex flex-col items-center justify-center'>
      <div className='flex w-full justify-between'>
        <TextClipFooter title="Wanna Connect" description="100% Chances I Read it" />
        <TextClipFooter title="Email me" description="100% Chances I Read it" />

      </div>
      <div className='mt-4'>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
        />
      </div>
    </div>
  );
};

export default Footer;
