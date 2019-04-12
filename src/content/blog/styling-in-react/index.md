---
templateKey: blog
title: Styling in React - Inline styles, Css Modules, CSS-in-Js
category: React
date: '2019-01-28T00:18:04+03:00'
featuredImg: /img/code-2620118_1280.jpg
author: Geoff Okumu
description: >-
  This article is an unopinionated exploration into the different styling architectures for react to help you choose the best one that fits your project.
---

<img src='code-2620118_1280.jpg' alt='laptop coding'>

## TL;DR
*This article is an unopinionated exploration into the different styling architectures for react to help you choose the best one that fits your project.*

## Intro

Component based architecture forces us to rethink how we structure our stylesheets. At the core of components architecture is encapsulation and separation of concerns, which does not bond will with css, since CSS creates all styles as global. To solve this issue many programmers have created diffent styling frameworks, to bring standardisation and modularity to CSS. This article is an unopinionated exploration into the different styling architectures for react to help you choose the best one that fits your project.

## Basics

Standardasation, modularity, scalability