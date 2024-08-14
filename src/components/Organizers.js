import OrgInfo from './OrgInfo'
import { useState } from 'react';

function Organizers() {
  const [current_org, setCurrentOrg] = useState(0);

  var incendium_about = "Incendium is an organization based out of Toronto, primarily known for their Run The Set monthlies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae aliquam elit. Pellentesque sodales, nibh vel sollicitudin feugiat, augue tortor bibendum mi, sodales tincidunt nisl mi vitae lacus."
  var ttt_about = "Toronto Top Tiers is an organization based out of Toronto, primarily known for their Run The Set monthlies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae aliquam elit. Pellentesque sodales, nibh vel sollicitudin feugiat, augue tortor bibendum mi, sodales tincidunt nisl mi vitae lacus."
  var ns_about = "NoStyle is an organization based out of Toronto, primarily known for their Run The Set monthlies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae aliquam elit. Pellentesque sodales, nibh vel sollicitudin feugiat, augue tortor bibendum mi, sodales tincidunt nisl mi vitae lacus."
  var dtr_about = "Downtown Rumble is an organization based out of Toronto, primarily known for their Run The Set monthlies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae aliquam elit. Pellentesque sodales, nibh vel sollicitudin feugiat, augue tortor bibendum mi, sodales tincidunt nisl mi vitae lacus."
  var dkm_about = "DKM Network is an organization based out of Toronto, primarily known for their Run The Set monthlies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae aliquam elit. Pellentesque sodales, nibh vel sollicitudin feugiat, augue tortor bibendum mi, sodales tincidunt nisl mi vitae lacus."

  return (
    <div className="organizer-wrapper">
      <div className="title-text"> Our Event Organizers</div>
      <div className="organizer-section">
        <div className="organizer-title-wrapper">
          <button className="org-title red-color-org" onClick={() => {setCurrentOrg(0)}}>Incendium</button>
          <button className="org-title red-color-org" onClick={() => {setCurrentOrg(1)}}>Toronto Top Tiers</button>
          <button className="org-title red-color-org" onClick={() => {setCurrentOrg(2)}}>NoStyle</button>
          <button className="org-title blue-color-org" onClick={() => {setCurrentOrg(3)}}>Downtown Rumble</button>
          <button className="org-title green-color-org" onClick={() => {setCurrentOrg(4)}}>DKM Network</button>
        </div>
  
        <div className="organizer-info-wrapper">
          {current_org === 0 ? <OrgInfo name="Incendium" twitter="https://x.com/incendium_gg" discord="https://discord.com/invite/4jXNxXm" about={incendium_about}/> : ""}
          {current_org === 1 ? <OrgInfo name="Toronto Top Tiers" twitter="https://x.com/incendium_gg" discord="https://discord.com/invite/4jXNxXm" about={ttt_about}/> : ""}
          {current_org === 2 ? <OrgInfo name="NoStyle" twitter="https://x.com/incendium_gg" discord="https://discord.com/invite/4jXNxXm" about={ns_about}/> : ""}
          {current_org === 3 ? <OrgInfo name="Downtown Rumble" twitter="https://x.com/incendium_gg" discord="https://discord.com/invite/4jXNxXm" about={dtr_about}/> : ""}
          {current_org === 4 ? <OrgInfo name="DKM Network" twitter="https://x.com/incendium_gg" discord="https://discord.com/invite/4jXNxXm" about={dkm_about}/> : ""}
        </div>
      </div>
    </div>
  )
};

export default Organizers;
