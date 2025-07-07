// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';

export default function HelloWorld(props) {
  return <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Hello Worldsdf </CardTitle>
          <CardDescription className="text-center mt-2 text-gray-600">
            Welcome to my app
          </CardDescription>
        </CardHeader>
      </Card>
    </div>;
}