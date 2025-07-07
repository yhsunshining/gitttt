// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Laptop2, Paintbrush, Plane, Utensils, HeartPulse, ChevronRight } from 'lucide-react';

export function TagCard({
  tag,
  onClick
}) {
  const iconMap = {
    technology: <Laptop2 className="text-blue-500" />,
    design: <Paintbrush className="text-purple-500" />,
    business: <Plane className="text-green-500" />,
    travel: <Plane className="text-yellow-500" />,
    food: <Utensils className="text-red-500" />,
    health: <HeartPulse className="text-indigo-500" />
  };
  const bgColorMap = {
    technology: 'bg-blue-100',
    design: 'bg-purple-100',
    business: 'bg-green-100',
    travel: 'bg-yellow-100',
    food: 'bg-red-100',
    health: 'bg-indigo-100'
  };
  return <div onClick={() => onClick(tag.id)} className="tag-card bg-white rounded-lg p-4 shadow-sm cursor-pointer border border-gray-100 hover:transform hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <div className="flex items-center mb-2">
        <div className={`w-8 h-8 rounded-full ${bgColorMap[tag.id]} flex items-center justify-center mr-2`}>
          {iconMap[tag.id]}
        </div>
        <span className="font-medium text-gray-800">{tag.name}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{tag.articleCount}篇文章</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">最近更新: {tag.lastUpdated}</span>
        <ChevronRight className="text-gray-400 h-4 w-4" />
      </div>
    </div>;
}