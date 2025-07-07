// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Search, Sliders } from 'lucide-react';

import { TagCard } from '@/components/TagCard';
const tagsData = [{
  id: 'technology',
  name: '技术',
  articleCount: 128,
  lastUpdated: '今天'
}, {
  id: 'design',
  name: '设计',
  articleCount: 660,
  lastUpdated: '昨天'
}, {
  id: 'business',
  name: '商业',
  articleCount: 42,
  lastUpdated: '3天前'
}, {
  id: 'travel',
  name: '旅行',
  articleCount: 36,
  lastUpdated: '1周前'
}, {
  id: 'food',
  name: '美食',
  articleCount: 28,
  lastUpdated: '2天前'
}, {
  id: 'health',
  name: '健康',
  articleCount: 19,
  lastUpdated: '5天前'
}];
export default function TagsPage(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTags, setFilteredTags] = useState(tagsData);
  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredTags(tagsData.filter(tag => tag.name.toLowerCase().includes(term)));
  };
  const handleTagClick = tagId => {
    console.log(`Filtering by tag: ${tagId}`);
    props.$w.utils.navigateTo({
      pageId: 'articles',
      params: {
        tag: tagId
      }
    });
  };
  return <div className="bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">标签</h1>
        <button className="text-blue-500 hover:text-blue-700">
          <Sliders className="h-5 w-5" />
        </button>
      </div>

      <div className="relative mb-6">
        <input type="text" placeholder="搜索标签..." value={searchTerm} onChange={handleSearch} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        <Search className="absolute right-3 top-3 text-gray-400 h-4 w-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTags.map(tag => <TagCard key={tag.id} tag={tag} onClick={handleTagClick} />)}
      </div>
    </div>
  </div>;
}