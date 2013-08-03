/**
 * Very simple tree implementation
 * Every item is a Tree object and can have any number of children.
 * Also offers a function to convert a list into a Tree.
 */
Tree = function(id, item) {
	this.id = id;
	this.item = item;
	this.children = [];
};

/**
 * Insert an item into tree as a children of item with id 'parent'
 */
Tree.prototype.insertAt = function(parent, item) {
	// If this is the correct parent, append to its children
	if (this.id == parent) {
		this.children.push( new Tree(item.id, item) );
	} else {
		// If not, try to add to one of the children
		if (this.children.length > 0) {
			for (var i = 0; i < this.children.length; i++) {
				this.children[i].insertAt( parent, item );
			}
		}
	}
	return this;
};

/**
 * Insert a list into the tree.
 * Objects in the list must have 'parent' and 'id' properties to map them to the tree.
 */
Tree.prototype.insertList = function(list) {
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		this.insertAt( item.parent, item );
	}
	return this;
}