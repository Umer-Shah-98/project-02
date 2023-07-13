import React from 'react'

const LinearProgressBar = ({bgcolor,progress,height}) => {
	
	const parentDiv = {
		height: height,
		width: '70%',
		backgroundColor: '#e5e5e5',
		borderRadius: 40,
		// margin: 50
        display:'flex'
	}
	
	const childDiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right',
        // display:'flex'
        position:'relative'
	}
	
	const progressText = {
		// padding: 5,
		color: 'black',
		fontWeight: 900,
        fontSize:9,
        position:'absolute',
        textAlign: 'center',
	}
		
	return (
        <>
	<div style={parentDiv}>
	<div style={childDiv}>
    <span className='ml-0.5 mt-0' style={progressText}>{`${progress}%`}</span>
	</div>
	</div>
		
        </>
	)
}

export default LinearProgressBar;
