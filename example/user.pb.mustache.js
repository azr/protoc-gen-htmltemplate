// Code generated by protoc-gen-htmltemplate.
// source: user.proto
// DO NOT EDIT!

var templates = templates || {};


templates.Profile = {
  form : '<div class="form-group"><label for="ID">ID</label><input class="form-control" id="ID" name="ID" type=number step=1 ></div><div class="form-group"><label for="FirstName">FirstName</label><input class="form-control" id="FirstName" name="FirstName" type="text" ></div><div class="form-group"><label for="LastName">LastName</label><input class="form-control" id="LastName" name="LastName" type="text" ></div><div class="form-group"><label for="FacebookID">FacebookID</label><input class="form-control" id="FacebookID" name="FacebookID" type="text" ></div><div class="form-group"><label for="Latitue">Latitue</label><input class="form-control" id="Latitue" name="Latitue" type=number step=any ></div><div class="form-group"><label for="Longitude">Longitude</label><input class="form-control" id="Longitude" name="Longitude" type=number step=any ></div><div class="form-group"><label for="number">number</label><input class="form-control" id="number" name="number" type=number step=1 ></div><div class="form-group"><label for="Int64">Int64</label><input class="form-control" id="Int64" name="Int64" type=number step=1 ></div><div class="form-group"><label for="Uint32">Uint32</label><input class="form-control" id="Uint32" name="Uint32" type=number step=1 min=0 ></div><div class="form-group"><label for="Uint64">Uint64</label><input class="form-control" id="Uint64" name="Uint64" type=number step=1 min=0 ></div><div class="form-group"><label for="Sint32">Sint32</label><input class="form-control" id="Sint32" name="Sint32" type=number step=1 ></div><div class="form-group"><label for="Sint64">Sint64</label><input class="form-control" id="Sint64" name="Sint64" type=number step=1 ></div><div class="form-group"><label for="Fixed32">Fixed32</label><input class="form-control" id="Fixed32" name="Fixed32" type=number step=1 ></div><div class="form-group"><label for="Fixed64">Fixed64</label><input class="form-control" id="Fixed64" name="Fixed64" type=number step=1 ></div><div class="form-group"><label for="Sfixed32">Sfixed32</label><input class="form-control" id="Sfixed32" name="Sfixed32" type=number step=1 ></div><div class="form-group"><label for="Sfixed64">Sfixed64</label><input class="form-control" id="Sfixed64" name="Sfixed64" type=number step=1 ></div><div class="form-group"><label for="leftPocket">leftPocket</label>{{> Storage}}</div>',
  formIncludes: function() { return {Storage: templates.Storage.form} }, 
};