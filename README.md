#Angular Toolbelt


This is a collection of tools to be used with AngularJS.  


##Modules
___
- Validate
- Mask


##Requirements
___
[jquery](https://github.com/jquery/jquery)

[jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput)

[angularjs](https://github.com/angular/angular.js)


##Examples
___
###Validate

```
<div class="form-group" ng-class="{'has-error' : toolbeltForm.zip.$error.required, 'has-success' : !toolbeltForm.zip.$error.required }">
    <label class="col-lg-2 control-label">Zip</label>
    <div class="col-lg-10">
        <input type="text" class="form-control" name="zip" ng-model="toolbelt.zip" placeholder="12345" required>
    </div>
</div>
```
###Mask

```
<div class="form-group">
    <label class="col-lg-2 control-label">Zip</label>
    <div class="col-lg-10">
        <input type="text" class="form-control" name="zip" ng-model="toolbelt.zip" toolbelt-mask="99999" placeholder="12345" required>
    </div>
</div>
```

##Thanks
___
Thanks to [digitalBush](https://github.com/digitalBush/jquery.maskedinput) for the original jquery masked input.

##License
___
MIT