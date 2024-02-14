import React, {useState} from 'react'
import axios from "axios";
import { Input, Button, Message, MessageHeader} from "semantic-ui-react";

const testData = {
    "id": "chatcmpl-8s6zD5Enm4eNu7N1vRAIzAD5ZYkCZ",
    "object": "chat.completion",
    "created": 1707907259,
    "model": "gpt-4-0125-preview",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "### Wuxia Novel Outline: The Blade of Eternity\n\n#### Chapter 1-5: A Fateful Encounter\n1. **A Stormy Night:** On a stormy night, our protagonist, Xiao Jun, saves an elder from attackers.\n2. **The Elder's Secret:** The elder is revealed to be a famous martial arts master who bestows Xiao Jun with a mysterious map before dying.\n3. **The Map's Secret:** Xiao Jun discovers the map leads to the legendary Blade of Eternity, a weapon said to grant immense power.\n4. **Begin the Journey:** Xiao Jun decides to find the blade and avenge the elder's death.\n5. **First Test:** Xiao Jun faces his first test, defeating a band of thieves, demonstrating his innate martial arts talent.\n\n#### Chapter 6-10: The Path of Trials\n6. **The Whispering Forest:** Xiao Jun navigates a cursed forest, overcoming its illusions.\n7. **The Bridge of Sorrows:** He crosses a bridge that shows one's deepest fears, learning inner strength.\n8. **The City of Shadows:** Arriving in a city controlled by the Shadow Sect, Xiao Jun must stay undercover.\n9. **The Arena:** To gather information, Xiao Jun participates in an underground fighting arena and gains fame.\n10. **A New Ally:** Xiao Jun rescues and befriends Li Mei, a skilled archer with her own vendetta against the Shadow Sect.\n\n#### Chapter 11-15: Shadows and Light\n11. **The Shadow Sect:** Discovering the sect’s interest in the Blade of Eternity, Xiao Jun decides to infiltrate their ranks.\n12. **Inner Sect Challenges:** Facing trials to prove his worth, Xiao Jun uses his intelligence and skills to advance.\n13. **The Secret Library:** With Li Mei's help, Xiao Jun discovers the sect’s ancient texts, uncovering the blade's true location.\n14. **Betrayal:** Xiao Jun's identity is revealed; they barely escape thanks to a mysterious masked savior.\n15. **The Masked Savior:** The savior is revealed to be Ying Yue, a former Shadow Sect member seeking redemption.\n\n#### Chapter 16-20: The Gathering Storm\n16. **Revelations:** Ying Yue provides critical information about the Blade's protector, a legendary beast.\n17. **Training Montage:** Realizing they're not yet strong enough, the trio undergoes rigorous training with a reclusive master.\n18. **Trial of the Elements:** To reach the blade, they must pass through the Trial of the Elements, facing their inner demons.\n19. **The Beast Awakens:** They face the legendary beast, learning that brute force is not the answer.\n20. **The Protector’s Test:** Demonstrating their pure intentions, they pass the test, and the beast reveals the Blade of Eternity’s location.\n\n#### Chapter 21-25: The Blade of Eternity\n21. **The Hidden Chamber:** Unveiling the chamber, they finally lay eyes on the Blade of Eternity.\n22. **The Blade's Choice:** The Blade tests Xiao Jun's spirit, deeming him worthy.\n23. **Power Unleashed:** Xiao Jun bonds with the Blade, feeling its immense power and wisdom.\n24. **The Shadow Sect Strikes:** The Shadow Sect locates them, leading to a fierce battle.\n25. **Escape:** The trio, now with the Blade, narrowly escape, vowing to dismantle the Shadow Sect.\n\n#### Chapter 26-30: Uniting the Clans\n26. **Rallying the Clans:** Realizing they need more allies, they set off to unite the various martial arts clans.\n27. **Swords against Shadows:** The clans are hesitant, fearing the Shadow Sect’s wrath, until Xiao Jun’s demonstration of courage and the Blade's power convinces them.\n28. **The Alliance Formed:** An alliance of clans is formed, each contributing their strengths.\n29. **Strategizing the Attack:** Together, they devise a plan to assault the Shadow Sect’s stronghold.\n30. **A Moment's Peace:** Amidst preparations, Xiao Jun and Li Mei share a moment, acknowledging their growing bond.\n\n#### Chapter 31-35: The Siege Begins\n31. **The Battle Commences:** The allied clans launch their assault on the Shadow Sect.\n32. **A Path Through Shadows:** Xiao Jun, Li Mei, and Ying Yue infiltrate the stronghold, aiming to take down the sect’s leader.\n33. **Trial by Combat:** Xiao Jun confronts the leader, a master of dark arts, in a battle that tests his limits.\n34. **The Power of the Blade:** With the Blade of Eternity, Xiao Jun overcomes the sect leader, breaking his control over the sect.\n35. **The Sect’s Fall:** As the stronghold crumbles, the Shadow Sect is defeated, freeing its members from tyranny.\n\n#### Chapter 36-40: Aftermath and New Horizons\n36. **Healing Wounds:** In the battle's aftermath, allies heal, and former sect members seek redemption.\n37. **Rebuilding:** Xiao Jun helps rebuild the cities affected by the Shadow Sect's rule.\n38. **A New Dawn:** The alliance of clans establishes a council to ensure peace and justice.\n39. **The Next Journey:** Xiao Jun, Li Mei, and Ying Yue decide to explore beyond, seeking to solve other mysteries of their world.\n40. **The Legend Spreads:** Tales of Xiao Jun and the Blade of Eternity spread across the land, inspiring hope.\n\n#### Chapter 41-45: The Dark Tide Rises\n41. **A New Threat:** Rumors of a darker, more ancient evil begin to surface, threatening the peace.\n42. **Gathering Intel:** The trio investigates, uncovering the resurgence of an ancient demonic cult.\n43. **Relic of Power:** Learning of a relic that can counter the threat, they embark on a quest to find it.\n44. **Enemies United:** To fight the looming threat, Xiao Jun must unite not only the clans but former enemies.\n45. **Preparing for War:** As the demonic presence grows, the land's greatest warriors band together, preparing for the inevitable confrontation.\n\n#### Chapter 46-50: The Final Battle\n46. **Dawn of Shadows:** The demonic cult unleashes their forces, plunging the land into chaos.\n47. **The Relic’s Light:** Using the newly acquired relic, Xiao Jun and allies fend off darkness, turning the tides.\n48. **The Ultimate Sacrifice:** In the pivotal moment, Ying Yue sacrifices herself, revealing her true past and love for the greater good.\n49. **The Last Stand:** Xiao Jun faces the cult leader in a titanic duel, channeling the power of the Blade, the relic, and his fallen friend’s spirit.\n50. **A New Legend:** The cult is vanquished, and peace is restored. Xiao Jun, forever changed, vows to protect the land, becoming a legend whispered across the ages."
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 18,
        "completion_tokens": 1444,
        "total_tokens": 1462
    },
    "system_fingerprint": "fp_f084bcfc79"
}

const story = testData.choices[0].message.content

const baseUrl = "https://afternoon-brook-38206-2e9ac60b70aa.herokuapp.com/story";

const Story = () => {
    
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")
    const [contentState, setContentState] = useState({showContent: false })

    const handleChange = (e) => {
        const newPrompt = e.target.value;
        setPrompt(newPrompt);
      };

    const renderStory = (story) => {
        const storyParagraphs = story.split('\n').map(str => <p><b>{str}</b></p>);
        return storyParagraphs
    }

    const getStory = (storyPrompt) => {
        const fullUrl = `${baseUrl}?prompt=${storyPrompt}`;
        setResponse(story)
        setContentState({...contentState, showContent: true})
    }

    return <div>

<Input
        value={prompt}
        onChange={handleChange}
        style={{ border: "5px solid white" }}
        placeholder="Enter a story prompt"
      />
      <Button basic color="teal" onClick={() => getStory(prompt)}>
        Write Story
      </Button>

      {contentState.showContent && (<Message color="teal">
        <MessageHeader>Your Story</MessageHeader>
        {renderStory(response)}
        </Message>)}

    </div>

}

export default Story