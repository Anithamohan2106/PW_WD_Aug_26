import {test} from "@playwright/test"

test ('learn Frame', async ({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
const allframes = page.frames()//return all the frames

//all frames [child+nested] [mainframe,frame1.frame 2, frame3]
console.log(allframes.length);
for (let i=0;i<allframes.length;i++)
{
const url = allframes[i].url()
console.log(`the url of the page is ${url}`);

}

//index is not reliable
//frame order may change 
const frame1 = allframes[1]
await frame1.locator('#Click').click()
await page.waitForTimeout(2000)
console.log('frame1 is clicked');
//nested frames -> using index we can directly switch to the nested frame
const frame4 =allframes[4]
await frame4.locator("//button[text()='Click Me']").click()
await page.waitForTimeout(2000)
console.log("frame4 is clicked");

})