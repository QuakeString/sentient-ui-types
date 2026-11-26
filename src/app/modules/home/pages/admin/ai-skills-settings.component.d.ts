import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { AiBuiltinSkill, AiAssistantService, AiTenantSkill } from '@core/http/ai-assistant.service';
import * as i0 from "@angular/core";
/**
 * Settings → AI assistant → Skills (tenant admin).
 *
 * The assistant loads a skill (a short recipe with examples) before it builds
 * something. SENTIENT ships the built-in ones; here a tenant admin adds the
 * company's own: a new skill, extra rules for a built-in skill (same name), or
 * house rules used in every conversation.
 */
export declare class AiSkillsSettingsComponent implements OnInit {
    private fb;
    private translate;
    private document;
    private aiAssistantService;
    readonly builtin: import("@angular/core").WritableSignal<AiBuiltinSkill[]>;
    readonly skills: import("@angular/core").WritableSignal<AiTenantSkill[]>;
    readonly loaded: import("@angular/core").WritableSignal<boolean>;
    readonly saving: import("@angular/core").WritableSignal<boolean>;
    /** Index in `skills` being edited, -1 for a new one, null when the editor is closed. */
    readonly editing: import("@angular/core").WritableSignal<number>;
    /** Name of the built-in skill the open editor extends, if any. */
    readonly extending: import("@angular/core").WritableSignal<string>;
    /** Tools of the skill in the editor (kept on save; set by an upload). */
    readonly editorTools: import("@angular/core").WritableSignal<string[]>;
    /** What the server changed or left out when it read an uploaded skill. */
    readonly importNotes: import("@angular/core").WritableSignal<string[]>;
    readonly importing: import("@angular/core").WritableSignal<boolean>;
    private readonly fileInput;
    readonly extendedNames: import("@angular/core").Signal<Set<string>>;
    readonly form: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        title: import("@angular/forms").FormControl<string>;
        description: import("@angular/forms").FormControl<string>;
        body: import("@angular/forms").FormControl<string>;
        always: import("@angular/forms").FormControl<boolean>;
        customerUsers: import("@angular/forms").FormControl<boolean>;
        enabled: import("@angular/forms").FormControl<boolean>;
    }>;
    constructor(fb: FormBuilder, translate: TranslateService, document: Document, aiAssistantService: AiAssistantService);
    ngOnInit(): void;
    builtinTitle(name: string): string | null;
    add(): void;
    extend(skill: AiBuiltinSkill): void;
    edit(index: number): void;
    cancel(): void;
    chooseFile(): void;
    /** Reads a SKILL.md or .zip, then opens it in the editor for review. Saving stays a separate step. */
    upload(event: Event): void;
    /** Saves a skill as SKILL.md. */
    download(name: string): void;
    saveEditor(): void;
    toggleEnabled(index: number, enabled: boolean): void;
    remove(index: number): void;
    private openEditor;
    private persist;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiSkillsSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiSkillsSettingsComponent, "st-ai-skills-settings", never, {}, {}, never, never, false, never>;
}
