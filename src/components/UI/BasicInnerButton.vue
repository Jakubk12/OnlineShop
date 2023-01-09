<template>
    <button><slot></slot></button>
</template>

<style lang="scss" scoped>

button {
    float: left;
	background: inherit;
    background-color: inherit;
	cursor:pointer;
	color: #e7ff60;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:15px 24px;
	text-decoration:none;
    border: 0;
    transition: 1500ms;
	max-height: 5vh;
	position: relative;
	bottom: 0.5rem;
	left: 0.5rem;
	border-radius: 25%;
	transition: 500ms;

    

}
button:hover, button:active {
	background-color:#4747ff;
	scale: 1.1

    
    
}
</style>