'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [courseTitle, setCourseTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateCourse = async () => {
    if (!courseTitle.trim()) return;
    
    setIsLoading(true);
    // In a real implementation, this would call an API to generate the course
    console.log(`Generating course: ${courseTitle}`);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Course Generator Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Course</h2>
          
          <div className="mb-4">
            <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the title for your course..."
            />
          </div>
          
          <Button
            onClick={generateCourse}
            disabled={isLoading || !courseTitle.trim()}
            className={isLoading ? 'opacity-70' : ''}
          >
            {isLoading ? 'Generating...' : 'Generate Course with AI'}
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Courses</h2>
          
          <div className="text-gray-500 italic">
            {courseTitle ? `Your generated courses will appear here once created.` : 'No courses yet. Create your first course above.'}
          </div>
        </div>
      </div>
    </div>
  );
}