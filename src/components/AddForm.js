
import React from "react";

function AddForm() {
 return (
  <div>
   <h1>Add an item</h1>
   <form>
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
        <input class="input" type="text" placeholder="Enter Name" />
        </div>
    </div>

    <div class="field">
        <label class="label">Calories</label>
        <div class="control has-icons-left has-icons-right">
        <input
        class="input is-success"
        type="text"
        placeholder="Enter Calories"
        />
        </div>
    </div>
    <div class="field">
        <label class="label">Image</label>
        <div class="control has-icons-left has-icons-right">
        <input
        class="input is-success"
        type="text"
        placeholder="Enter image"
        />
        </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
        <button class="button is-link">Submit</button>
        </div>
    </div>
   </form>
   </div>
 );
}

export default AddForm;
