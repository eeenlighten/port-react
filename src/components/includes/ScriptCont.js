import React, { useState, useEffect } from 'react'
import scriptText from '../data/scriptData1';

function ScriptInfo({id, desc, codeView, preCode, clas, codeText, language, handleButonClick}){

    return (
        <div className={clas}>
            {
                clas === "box1 box1__0" ? 
                <>
                    <div className="desc">
                        <ul>
                            <li><a href="/" className="link">1</a></li>
                            <li><a href="/script2" className="link">2</a></li>
                            <li><a href="/script3" className="link">3</a></li>
                            <li><a href="/script4" className="link">4</a></li>
                            <li><a href="/script5" className="link">5</a></li>
                            <li><a href="/script6" className="link">6</a></li>
                        </ul>
                        <p><a href="/" className='link'>{desc}</a></p>                        
                    </div>
                </> : (
                    clas === "box4" ?
                        <>
                            <div className="desc">
                                <p><a href="/" className="arr">{desc}</a></p>     
                                <a href="/" className="arrow">
                                    <svg width="313" height="8" viewBox="0 0 313 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M312.354 4.35355C312.549 4.15829 312.549 3.84171 312.354 3.64645L309.172 0.464466C308.976 0.269204 308.66 0.269204 308.464 0.464466C308.269 0.659728 308.269 0.976311 308.464 1.17157L311.293 4L308.464 6.82843C308.269 7.02369 308.269 7.34027 308.464 7.53553C308.66 7.7308 308.976 7.7308 309.172 7.53553L312.354 4.35355ZM0 4.5H312V3.5H0V4.5Z" fill="black"/>
                                    </svg>
                                </a>                  
                            </div>   
                        </> : (
                            clas === "box5" ? 
                            <>
                                <div className="desc">
                                    <p className="view">{desc}</p>
                                    <p>{codeView}</p>
                                </div>
                                <div className="hover_txt hover_bg"><span className="view">{codeText}</span></div>
                            </> : (
                                    clas === "box7 site__desc box7__1" ? 
                                    <>
                                        <div className="desc">
                                            <p className="view">{desc}</p>
                                            <p>{codeView}</p>
                                        </div>
                                        <div><span className="view">{codeText}</span></div>
                                    </> : ( 
                                            clas === "box9 site__desc" ?
                                                    <div className="desc">
                                                        <h3>{scriptText[8].desc}</h3>
                                                        <p>{scriptText[8].codeView}</p> 
                                                        <div className="code">
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {scriptText[8].preCode}
                                                            </code></pre>
                                                        </div>
                                                        <h3>{scriptText[9].desc}</h3>
                                                        <p>{scriptText[9].codeView}</p> 
                                                        <div className="code">
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {scriptText[9].preCode}
                                                            </code></pre>
                                                        </div>  
                                                        <h3>{scriptText[10].desc}</h3>
                                                        <p>{scriptText[10].codeView}</p> 
                                                        <div className="code">
                                                            <pre><code className={`language-${language}`}>
                                                                <br />
                                                                {scriptText[10].preCode}
                                                            </code></pre>
                                                        </div>                                                                                          
                                                    </div>
                                                : (
                                                    clas === "box15" ? 
                                                    <>
                                                        <div className="desc">
                                                            <p className="view">{desc}</p>
                                                            <p>{codeView}</p>
                                                        </div>
                                                        <div className="hover_txt hover_bg">{codeText}</div>
                                                    </> : (
                                                            clas === "box16" ? 
                                                            <>
                                                                <div className="desc">
                                                                    <p>{desc}</p>
                                                                    <p>{codeView}</p>
                                                                </div>
                                                                <div className="hover_txt hover_bg">{codeText}</div>
                                                            </> : <></>                                                        
                                                    )
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
    <section id="container" className="contents">
        {scriptText.map((txt)=>(
                <ScriptInfo 
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