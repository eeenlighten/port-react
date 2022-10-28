import React, { useState, useEffect } from 'react'
import siteText from '../data/siteData';
import styles from '../../assets/css/site.module.css'
import Prism from 'prismjs';

function SiteInfo({id, desc, codeView, clas, codeText, language}){

    return (
        <div className={styles.clas} >
            {
                clas === "box1 box1__site" ? 
                <>
                    <div className={styles.desc}>
                        <ul>
                            <li><a href="/site">1</a></li>
                            <li><a href="/responsive">2</a></li>
                        </ul>
                        <p>{desc}</p>                        
                    </div>
                </> : (
                    clas === "box4" ?
                        <>
                            <div className={styles.desc}>
                                <p><a href="/" className={[styles.arr, styles.link]}>{desc}</a></p>     
                                <a href="/" className={styles.arrow}>
                                    <svg width="313" height="8" viewBox="0 0 313 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M312.354 4.35355C312.549 4.15829 312.549 3.84171 312.354 3.64645L309.172 0.464466C308.976 0.269204 308.66 0.269204 308.464 0.464466C308.269 0.659728 308.269 0.976311 308.464 1.17157L311.293 4L308.464 6.82843C308.269 7.02369 308.269 7.34027 308.464 7.53553C308.66 7.7308 308.976 7.7308 309.172 7.53553L312.354 4.35355ZM0 4.5H312V3.5H0V4.5Z" fill="black"/>
                                    </svg>
                                </a>                  
                            </div>   
                        </> : (
                            clas === "box7" ? 
                            <>
                                <div className={styles.desc}>
                                    <p className={styles.view}>{desc}</p>
                                    <p>{codeView}</p>
                                </div>
                                <div className={[styles.hover_txt, styles.hover_bg]}><span className={styles.view}>{codeText}</span></div>
                            </> : (
                                    clas === "box11" ? 
                                    <>
                                        <div className={styles.desc}>
                                            <p className={styles.view}>{desc}</p>
                                            <p>{codeView}</p>
                                        </div>
                                        <div className={[styles.hover_txt, styles.hover_bg]}><span className={styles.view}>{codeText}</span></div>
                                    </> : (
                                            clas === "box15" ? 
                                            <>
                                                <div className={styles.desc}>
                                                    <p className={styles.view}>{desc}</p>
                                                    <p>{codeView}</p>
                                                </div>
                                                <div className={[styles.hover_txt, styles.hover_bg]}><span className={styles.view}>{codeText}</span></div>
                                            </> : (
                                                clas === "box12 site__desc" ?
                                                    <div className={styles.desc}>
                                                        <h3>{siteText[11].desc}</h3>
                                                        <p>{siteText[11].codeView}</p> 
                                                        <div className={styles.code}>
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {siteText[11].preCode}
                                                            </code></pre>
                                                        </div>
                                                        <h3>{siteText[12].desc}</h3>
                                                        <p>{siteText[12].codeView}</p> 
                                                        <div className={styles.code}>
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {siteText[12].preCode}
                                                            </code></pre>
                                                        </div>  
                                                        <h3>{siteText[13].desc}</h3>
                                                        <p>{siteText[13].codeView}</p> 
                                                        <div className={styles.code}>
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {siteText[13].preCode}
                                                            </code></pre>
                                                        </div>                                                                                          
                                                    </div>
                                                : <></>
                                )
                            )
                        )               
                    )                       
                )
            }   
        </div>
    )
}

function SiteCont() {
  return (
    <section id={styles.container} className={styles.contents}>
        {siteText.map((txt)=>(
                <SiteInfo 
                    key={txt.id}
                    clas={txt.clas}
                    desc={txt.desc}
                    codeView={txt.codeView}
                    codeText={txt.codeText}
                    preCode={txt.preCode}
                />
            ))
        }
    </section>
  )
}

export default SiteCont