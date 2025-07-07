// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Check, Loader2, AlertCircle } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Label, useToast } from '@/components/ui';

export default function InputPage(props) {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!inputValue.trim()) {
      toast({
        title: '输入不能为空',
        description: '请输入有效内容',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
    toast({
      title: '提交成功',
      description: '您的输入已成功提交'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">输入内容</h1>
          <p className="text-gray-500 mb-6">请填写以下信息</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="input" className="block text-sm font-medium text-gray-700">
                内容输入
              </Label>
              <div className="relative">
                <Input id="input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="请输入..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                {isSuccess && <Check className="absolute right-3 top-3.5 h-5 w-5 text-green-500" />}
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting || isSuccess} className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
              {isSubmitting ? <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  提交中...
                </> : isSuccess ? <>
                  <Check className="h-4 w-4 mr-2" />
                  已提交
                </> : '提交'}
            </Button>
          </form>
        </div>
      </div>
    </div>;
}