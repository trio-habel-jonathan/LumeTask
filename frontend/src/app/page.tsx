'use client'

import React, { useState } from 'react';

const NotionInspiredHome = () => {
  // Tambah tipe number | null ke useState
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar - Light Theme */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-xl tracking-tight">LumeTask</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 text-sm hover:text-black transition-all duration-300 border-b border-transparent hover:border-black">Login</a>
            <a href="#" className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-all duration-300">
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean and Bold */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-gray-600">Think.</span> <br />
                <span>Create.</span> <br />
                <span className="text-gray-600">Organize.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                A seamless workspace designed for clarity and thought. No clutter, just pure productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-all duration-300">
                  Start free
                </a>
                <a href="#" className="border border-gray-300 px-6 py-3 text-gray-600 hover:border-black hover:text-black transition-all duration-300">
                  See how
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-widest">Empowering Teams with</p>
              <p className="text-xs text-white mb-2 uppercase tracking-widest">Empowering Teams with</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="h-8 bg-black rounded flex items-center justify-center text-white font-semibold">AI Assistant</div>
                <div className="h-8 bg-black rounded flex items-center justify-center text-white font-semibold">Smart Notes</div>
                <div className="h-8 bg-black rounded flex items-center justify-center text-white font-semibold">Task Master</div>
                <div className="h-8 bg-black rounded flex items-center justify-center text-white font-semibold">Digital Ally</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Display - Mac-style Window with Detailed Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mac Window with enhanced detail */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-300 backdrop-blur-md">
            {/* Window Header */}
            <div className="h-8 bg-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 text-xs text-gray-600">LumeTask Workspace</div>
            </div>
            
            {/* App Content */}
            <div className="flex h-[600px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-300 p-4 bg-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-xs">Q</div>
                  <div className="text-sm font-medium">Main Workspace</div>
                </div>
                
                {/* Sidebar Navigation */}
                <div className="mb-8">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Workspace</div>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2 p-2 bg-gray-200 rounded text-sm">
                      <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span>Home</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Documents</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 6L20 6M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span>Tasks</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Calendar</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Spaces</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Favorites</div>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>Product Roadmap</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      <span>Design System</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Project Ideas</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Teams</div>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-5 h-5 rounded bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-xs">D</div>
                      <span>Design</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-5 h-5 rounded bg-green-500/30 text-green-300 flex items-center justify-center text-xs">P</div>
                      <span>Product</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-300 rounded text-sm cursor-pointer">
                      <div className="w-5 h-5 rounded bg-blue-500/30 text-blue-300 flex items-center justify-center text-xs">E</div>
                      <span>Engineering</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 bg-gray-50 p-8 overflow-auto">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">Project Overview</h1>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                        <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Updated 2h ago</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">
                        <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Team Access</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-xs text-gray-500 mb-1">Tasks</div>
                    <div className="flex justify-between items-end">
                      <div className="text-2xl font-bold">24/36</div>
                      <div className="text-green-400 text-sm">67%</div>
                    </div>
                    <div className="mt-2 bg-gray-200 h-1 rounded-full w-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-xs text-gray-500 mb-1">Timeline</div>
                    <div className="flex justify-between items-end">
                      <div className="text-2xl font-bold">14 days</div>
                      <div className="text-yellow-400 text-sm">left</div>
                    </div>
                    <div className="mt-2 bg-gray-200 h-1 rounded-full w-full overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-xs text-gray-500 mb-1">Resources</div>
                    <div className="flex justify-between items-end">
                      <div className="text-2xl font-bold">8 members</div>
                      <div className="text-blue-400 text-sm">active</div>
                    </div>
                    <div className="mt-2 flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-gray-300"></div>
                      <div className="w-6 h-6 rounded-full bg-green-500/30 border border-gray-300"></div>
                      <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-gray-300"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-300 text-xs flex items-center justify-center">+5</div>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Project Tasks</h2>
                    <div className="flex space-x-2">
                      <button className="bg-gray-200 text-gray-600 p-1 rounded hover:bg-gray-300">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="bg-gray-200 text-gray-600 p-1 rounded hover:bg-gray-300">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5H21M10 11V17M14 11V17M5 6L6 20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20L19 6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="bg-blue-500/20 text-blue-400 p-1 rounded hover:bg-blue-500/30">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center justify-between hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Design system documentation</span>
                      </div>
                      <div className="text-xs text-gray-500">Today</div>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center justify-between hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded border border-gray-300"></div>
                        <span>Component library update</span>
                      </div>
                      <div className="text-xs text-gray-500">Tomorrow</div>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center justify-between hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded border border-gray-300"></div>
                        <span>User research interviews</span>
                      </div>
                      <div className="text-xs text-gray-500">Apr 8</div>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center justify-between hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded border border-gray-300"></div>
                        <span>Prototype testing</span>
                      </div>
                      <div className="text-xs text-gray-500">Apr 12</div>
                    </div>
                  </div>
                </div>
                
                {/* Documents Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-blue-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13 3V8C13 8.55228 13.4477 9 14 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Project Brief</span>
                      </div>
                      <div className="text-xs text-gray-500">Updated 3 days ago</div>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13 3V8C13 8.55228 13.4477 9 14 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Feature Specs</span>
                      </div>
                      <div className="text-xs text-gray-500">Updated yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Modernized with Hover Effects */}
      <section className="py-24 px-6 bg-white border-t border-gray-300">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">A workspace that adapts to you</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Not just another note-taking app. A complete system for thought, built for real work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Connected Thinking",
              description: "Link your ideas together naturally with bidirectional connections and networked thought.",
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            },
            {
              title: "Fluid Organization",
              description: "Flexible structure that grows with your knowledge. No forced hierarchy or rigid categories.",
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L12 12L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            },
            {
              title: "Collaborative Workspaces",
              description: "Work together in real-time with your team, no matter where you are.",
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 ${hoveredFeature === index ? 'bg-gray-100' : ''}`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section - Modern and Professional */}
      <footer className="py-6 bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between text-gray-600">
          {/* Logo Section */}
          <div className="text-lg font-bold mb-4">
            LumeTask
          </div>
          
          {/* Links Section */}
          <div className="flex w-full md:w-2/3 justify-between mb-4">
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-black transition duration-300">Docs</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Support Policy</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Learn</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">More</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-black transition duration-300">Contact Sales</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Community</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">About LumeTask</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-black transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-black transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Subscribe to our Newsletter</h4>
              <p className="text-sm">Stay updated on new releases and features, guides, and case studies.</p>
              <input type="email" placeholder="you@domain.com" className="mt-2 p-2 border rounded" />
              <button className="mt-2 bg-black text-white p-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-center mt-4">© 2025 LumeTask. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotionInspiredHome;