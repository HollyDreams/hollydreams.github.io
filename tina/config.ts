import { defineConfig } from "tinacms";

const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "static",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "static",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        format: "md",
        match: {
          include: "_index",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "linkedinUrl",
            label: "LinkedIn URL",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "about",
        label: "About Page",
        path: "content/about",
        format: "md",
        match: {
          include: "_index",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "bioTitle",
            label: "Bio Title",
            required: false,
          },
					{
						type: "image",
						label: "Hero image",
						name: "imgSrc",
					},
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
			{
				name: "works",
				label: "Works",
				path: "content/works",
				format: "md",
				match: {
					include: "**/index", // This will match any index.md file inside subdirectories
				},
				ui: {
					allowedActions: {
						create: true,
            delete: true
					},
				},
				fields: [
					{
						type: "image",
						label: "Hero image",
						name: "imgSrc",
					},
					{
						type: "string",
						label: "Genre",
						list: true,
						name: "genreTina",
					},
					{
						type: "string",
						label: "Genre Icon",
						name: "genreIcon"
					},
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
});
