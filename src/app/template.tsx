"use client";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Authenticator>{children}</Authenticator>
    </div>
  );
}
