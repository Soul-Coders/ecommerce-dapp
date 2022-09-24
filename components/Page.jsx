import Head from 'next/head';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
// import { useState } from 'react';

import React, { Component } from 'react';

export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      sidebarCollapsed: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.sidebarCollapsed);
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed,
    });
  }

  render() {
    const title = this.props.name
    return (
      <div className="bg-black">
        <Head>
          <title>{title} | ShoppingVerse</title>
          <meta
            name="description"
            content="Dashboard is an easy place to sort out history the right way"
          />
          <link rel="icon" href="/icon.svg" />
        </Head>
        <main className="text-brand-lavender">
          <Navbar onClick={this.handleClick}/>
          <div className="flex flex-1 min-h-[93vh]">
            {this.state.sidebarCollapsed && <Sidebar />}
            <div className='p-4'>
              <h1 className="p-3 text-xl font-bold">{title}</h1>
              <div className='p-3 border border-rose-500 rounded-md'>
                <h3>Content</h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
