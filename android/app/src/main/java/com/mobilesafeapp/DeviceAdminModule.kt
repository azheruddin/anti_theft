package com.mobilesafeapp

import android.app.Activity
import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceAdminModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DeviceAdmin"
    }

    @ReactMethod
    fun enableDeviceAdmin() {
        val context = reactApplicationContext
        val dpm = context.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
        val componentName = ComponentName(context, MyDeviceAdminReceiver::class.java)

        val intent = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN).apply {
            putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, componentName)
            putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "This is required for device admin features.")
        }

        val activity: Activity? = currentActivity
        activity?.startActivity(intent)
    }

    @ReactMethod
    fun isDeviceAdminEnabled(promise: Promise) {
        val context = reactApplicationContext
        val dpm = context.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
        val componentName = ComponentName(context, MyDeviceAdminReceiver::class.java)

        try {
            val isAdmin = dpm.isAdminActive(componentName)
            promise.resolve(isAdmin) // Resolve promise with true or false
        } catch (e: Exception) {
            promise.reject("Error", e) // Reject promise in case of an error
        }
    }
}
