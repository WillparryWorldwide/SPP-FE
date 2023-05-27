// This script gets all project category
import { uniq } from "lodash";

class FilterProject {
	constructor(projects) {
		this.project = projects? projects: [];
		this.category = this.allProjectCategory();
		this.local_goverment = this.allProjectLGA();
		this.state = this.allProjectState();
	}

	allProjectCategory() {
		return uniq(this.project.map(project => project.category));
	}

	allProjectState() {
		return uniq(this.project.map(project => project.state));
	}

	allProjectLGA() {
		return uniq(this.project.map(project => project.local_goverment));
	}
}

export default FilterProject;