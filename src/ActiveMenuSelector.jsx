import { Component, createElement } from "react";

export default class ActiveMenuSelector extends Component {
    componentDidMount() {
        const { menuWidgetName, menuItemTitle } = this.props;
        //find the menu
        const menu = document.querySelector(".mx-name-" + menuWidgetName);
        //remove the active state from any/all of the menu items
        if (menu.querySelector(".active") !== null) {
            const activeItems = menu.querySelectorAll(".active");
            activeItems.forEach(menuItem => menuItem.classList.remove("active"));
        }
        //add the active state back to the one that matches your target title
        const targetItem = menu.querySelector("a[title='" + menuItemTitle.value + "']");
        if (targetItem) {
            
            const listItemWithTargetAsChild = targetItem.closest("ul").closest("li.mx-navigationtree-has-items");
						
			if(listItemWithTargetAsChild){
                // if the target item is at secondary level than, primary level li should expand.
				listItemWithTargetAsChild.classList.remove("mx-navigationtree-collapsed");
			}
            
            //top nav menu requires the parent (li) to have the active class            
            targetItem.parentNode.classList.add("active");
            
            //left nav tree requires the (a) element to have the active class
            targetItem.classList.add("active");
            
        } else {
            console.error(
                "ActiveMenuSelector widget could not find target: " +
                    menuItemTitle.value +
                    " in menu: " +
                    menuWidgetName
            );
        }
    }

    render() {
        return null;
    }
}
