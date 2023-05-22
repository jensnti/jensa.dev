---
title: Content Security Policy
date: 2023-02-07
summary: "Web security is always relevant and always important. Content Security Policy (CSP) is a way to secure a website from attacks."
tags: [ 'säkerhet', 'csp']
category: anteckningar
---

Web security is always relevant and always important. Content Security Policy (CSP) is a way to secure a website from attacks.

CSP is an HTTP response header that ensures web pages cannot load content from sources other than those allowed. This is a way to prevent attacks like XSS and CSRF. You can read more about it on Content-Security-Policy - HTTP | MDN.

I've been thinking about fixing this for this website before but haven't gotten around to it. However, by chance, I checked Mozilla Observatory, a service for testing website security. The result for this page was not great, and a significant part of it was due to the lack of a CSP.

Securing the website
Since this page is hosted on Netlify and built with 11ty, I started exploring based on that. On Netlify, a CSP can be specified either in netlify.toml or in _headers (there are probably more ways).

I found an example of _headers to build a _headers file with .njk that seemed reasonable, but the problem was that it didn't solve the issue of having inline styles in my HTML on the page. It is possible to solve (inline styles) by using unsafe-inline for styles in CSP, but the consensus seems to be that it's better not to have any CSP at all.

First, I looked into using a nonce, but if one needs to be generated for each HTTP request, I'm not sure how it would be resolved. Then, I played around with sha256 hashing the style string (as it is) in the build process, but I thought there should be a simpler solution.

Netlify plugins
As often is the case, there is a simpler solution created by a smart person. I found a plugin called "Netlify plugin csp generator" to automate the creation of a CSP and hash inline styles. The plugin is configured in netlify.toml and generates headers when the project is built.

After some testing and fixes, most things seemed to work, but the page gives errors on inline styles, so something is causing the issue. There's still some work to be done.

Results
A significantly improved score on Observatory and, with this, a safer website for you as a visitor.

For my part, I gained some new and expanded knowledge about website security.

Introduction:
Web security is a constant concern in today's digital landscape. Protecting websites from various attacks is crucial to ensure user safety and maintain the integrity of the platform. One effective approach to bolstering security is through the implementation of Content Security Policy (CSP). In this article, we will delve deeper into CSP, its significance in safeguarding websites, and explore practical steps to implement it effectively.

Understanding Content Security Policy (CSP):
Content Security Policy (CSP) is an HTTP response header designed to restrict the loading of content from unauthorized sources within web pages. By defining a set of directives, CSP prevents cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks, among others. To gain a comprehensive understanding of CSP, refer to the official documentation on Content-Security-Policy - HTTP | MDN.

Recognizing the Need for CSP:
While aware of the importance of CSP, I had not yet addressed its implementation for this particular website. However, a fortunate turn of events led me to check the website's security using Mozilla Observatory. The evaluation revealed a subpar score, primarily due to the absence of a CSP.

Securing the Website on Netlify:
Given that the website is hosted on Netlify and built with 11ty, I began exploring solutions within this context. Netlify provides multiple ways to specify a CSP, such as using netlify.toml or _headers files. Initially, I discovered an example of using _headers with .njk files, which seemed promising. Unfortunately, it didn't address the issue of inline styles in my HTML. Although adding unsafe-inline for styles in CSP is a potential solution, it is generally advised to avoid such practices altogether.

Exploring Advanced Solutions:
Initially, I considered using a nonce to generate unique values for each HTTP request. However, implementing this approach posed challenges in maintaining consistency. As an alternative, I experimented with sha256 hashing the style string during the build process. Although feasible, I sought a simpler and more elegant solution.

Leveraging Netlify Plugins:
As often happens, an ingenious solution had already been devised by a knowledgeable individual. I came across the "Netlify plugin csp generator," which automates the creation of a CSP and facilitates hashing inline styles. By configuring the plugin in netlify.toml, it seamlessly generates the required headers during the project's build process.

Fine-Tuning and Future Work:
Following some testing and troubleshooting, most aspects of the solution appeared to work well. However, the page encountered errors related to inline styles, indicating an unresolved issue. Further investigation and refinement are necessary to resolve this obstacle fully.

Positive Outcomes:
Despite the remaining challenges, implementing CSP using the Netlify plugin resulted in a significantly improved score on the Mozilla Observatory. This enhancement translates to a safer browsing experience for website visitors, ensuring their security and protecting against potential attacks.

Personal Growth:
Throughout this process, I acquired valuable knowledge and expanded my understanding of website security. The journey of securing this website has provided me with practical insights into implementing CSP effectively and maintaining robust web security practices.

Conclusion:
Web security remains a critical consideration for website owners and developers. Content Security Policy (CSP) stands as a powerful tool to protect websites from various vulnerabilities and attacks. By investing time and effort into implementing CSP, you can enhance your website's security, earn the trust of your users, and safeguard their online experience.