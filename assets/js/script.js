function unhideLightbox(productID) { 
    closeAllproduct()
	document.getElementById(productID).classList.toggle('hidden');
}

document.getElementById("serum").onmouseover = function () {
	if (!document.getElementById("serum").classList.contains("hidden"))
    {unhideLightbox("serumtext")}
}
document.getElementById('serum').onmouseout= function(){
    closeAllproduct()
}

document.getElementById("cream").onmouseover = function () {
	if (!document.getElementById("cream").classList.contains("hidden"))
    {unhideLightbox("creamtext")}
}
document.getElementById('cream').onmouseout= function(){
    closeAllproduct()
}

document.getElementById("cleanser").onmouseover = function () {
	if (!document.getElementById("cleanser").classList.contains("hidden"))
    {unhideLightbox("cleansertext")}
}
document.getElementById("cleanser").onmouseout = function () {
	closeAllproduct()
}

document.getElementById("mask").onmouseover = function () {
	if (!document.getElementById("mask").classList.contains("hidden"))
    {unhideLightbox("masktext")}
}
document.getElementById("mask").onmouseout = function () {
	closeAllproduct()
}

document.getElementById("eye").onmouseover = function () {
	if (!document.getElementById("eye").classList.contains("hidden"))
    {unhideLightbox("eyetext")}
}
document.getElementById("eye").onmouseout = function () {
	closeAllproduct()
}

document.getElementById("skii1").onmouseover = function () {
	if (!document.getElementById("skii1").classList.contains("hidden"))
    {unhideLightbox("skii1text")}
}
document.getElementById("skii1").onmouseout = function () {
	closeAllproduct()
}

document.getElementById("skii2").onmouseover = function () {
	if (!document.getElementById("skii2").classList.contains("hidden"))
    {unhideLightbox("skii2text")}
}
document.getElementById("skii2").onmouseout = function () {
	closeAllproduct()
}

function closeAllproduct(){
    document.querySelectorAll(".description").forEach(d => d.classList.add("hidden"))
}

// Part2

let serum = document.getElementById("serum");
let skii2 = document.getElementById("skii2");
let skii1 = document.getElementById("skii1");
let eye = document.getElementById("eye");
let mask = document.getElementById("mask");
let cleanser = document.getElementById("cleanser");
let cream = document.getElementById("cream");
function showSerumOnly(){
    cream.classList.add("hidden");
    cleanser.classList.add("hidden");
    mask.classList.add("hidden");
    eye.classList.add("hidden");
    skii1.classList.add("hidden");
    skii2.classList.add("hidden");
    serum.classList.remove('hidden');
}
let serumChecklistItem = document.getElementById("item6text");
serumChecklistItem.onclick = showSerumOnly;

function showSkii2Only(){
    cream.classList.add("hidden");
    cleanser.classList.add("hidden");
    mask.classList.add("hidden");
    eye.classList.add("hidden");
    skii1.classList.add("hidden");
    serum.classList.add('hidden');
    skii2.classList.remove('hidden');
}
let skii2ChecklistItem = document.getElementById("item4text");
skii2ChecklistItem.onclick = showSkii2Only;

function showSkii1Only(){
    cream.classList.add("hidden");
    cleanser.classList.add("hidden");
    mask.classList.add("hidden");
    eye.classList.add("hidden");
    skii1.classList.remove("hidden");
    serum.classList.add('hidden');
    skii2.classList.add('hidden');
}
let skii1ChecklistItem = document.getElementById("item3text");
skii1ChecklistItem.onclick = showSkii1Only;

function showCreamOnly(){
    cream.classList.remove("hidden");
    cleanser.classList.add("hidden");
    mask.classList.add("hidden");
    eye.classList.add("hidden");
    skii1.classList.add("hidden");
    serum.classList.add('hidden');
    skii2.classList.add('hidden');
}
let creamChecklistItem = document.getElementById("item7text");
creamChecklistItem.onclick = showCreamOnly;

function showCleanserOnly(){
    cream.classList.add("hidden");
    cleanser.classList.remove("hidden");
    mask.classList.add("hidden");
    eye.classList.add("hidden");
    skii1.classList.add("hidden");
    serum.classList.add('hidden');
    skii2.classList.add('hidden');
}
let cleanserChecklistItem = document.getElementById("item2text");
cleanserChecklistItem.onclick = showCleanserOnly;

function showMaskOnly(){
    console.log("hello")
    cream.classList.add("hidden");
    cleanser.classList.add("hidden");
    mask.classList.remove("hidden");
    eye.classList.add("hidden");
    skii1.classList.add("hidden");
    serum.classList.add('hidden');
    skii2.classList.add('hidden');
}
let maskChecklistItem = document.getElementById("item1text");
maskChecklistItem.onclick = showMaskOnly;

function showEyeOnly(){
    cream.classList.add("hidden");
    cleanser.classList.add("hidden");
    mask.classList.add("hidden");
    eye.classList.remove("hidden");
    skii1.classList.add("hidden");
    serum.classList.add('hidden');
    skii2.classList.add('hidden');
}
let eyeChecklistItem = document.getElementById("item5text");
eyeChecklistItem.onclick = showEyeOnly;

let button=document.getElementById('thebutton')
button.onclick=showallitem
function showallitem(){
    document.getElementById('cleanser').classList.remove('hidden')
	document.getElementById('mask').classList.remove('hidden')
	document.getElementById('eye').classList.remove('hidden')
	document.getElementById('skii1').classList.remove('hidden')
	document.getElementById('skii2').classList.remove('hidden')
	document.getElementById('serum').classList.remove('hidden')
    document.getElementById('cream').classList.remove('hidden')
}