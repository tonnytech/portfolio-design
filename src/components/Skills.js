import React from 'react'

const Skills = () => {
  return (
    <>
    <section className='section skills'>
        
        <div className='section-title'>
        <h2>skills</h2>
        <div className='underline'></div>
        </div>
        <div className='section-center skill-center'>
            <article>
                <h3 className=''>front end</h3>
                {/* single skill */}
                <div className='skill'>
                    <p>HTML/CSS</p>
                    <div className='skill-container'>
                        <div className='skill-value'></div>
                        <p className='skill-text'> 50%</p>
                    </div>
                </div>
                {/* end of single skill */}
                {/* single skill */}
                <div className='skill'>
                    <p>JavaScript</p>
                    <div className='skill-container'>
                        <div className='skill-value value-70'></div>
                        <p className='skill-text skill-text-70'> 70%</p>
                    </div>
                </div>
                {/* end of single skill */}
                 {/* single skill */}
                 <div className='skill'>
                    <p>React</p>
                    <div className='skill-container'>
                        <div className='skill-value value-80'></div>
                        <p className='skill-text skill-text-80'> 80%</p>
                    </div>
                </div>
                {/* end of single skill */}

            </article>
            <article>
                <h3 className=''>back end</h3>
                {/* single skill */}
                <div className='skill'>
                    <p>NODE</p>
                    <div className='skill-container'>
                        <div className='skill-value'></div>
                        <p className='skill-text'> 50%</p>
                    </div>
                </div>
                {/* end of single skill */}
                {/* single skill */}
                <div className='skill'>
                    <p>PHP</p>
                    <div className='skill-container'>
                        <div className='skill-value value-70'></div>
                        <p className='skill-text skill-text-70'> 70%</p>
                    </div>
                </div>
                {/* end of single skill */}
                 {/* single skill */}
                 <div className='skill'>
                    <p>PYTHON</p>
                    <div className='skill-container'>
                        <div className='skill-value value-80'></div>
                        <p className='skill-text skill-text-80'> 80%</p>
                    </div>
                </div>
                {/* end of single skill */}

            </article>
        </div>
    </section>
      
    </>
  )
}

export default Skills
