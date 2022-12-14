<template>
    <div class="parent">
    <button class="basic"><slot></slot></button>
    </div>
</template>

<style lang="scss" scoped>

.basic {
    float: left;
	background: inherit;
    background-color: inherit;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:15px 24px;
	text-decoration:none;
	text-shadow:0px 1px 50px #ff1100;
}
.basic:hover {
	background:linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%);
	background-color:#ce0100;
}
.basic:active {
	position:relative;
	top:1px;
}

</style>