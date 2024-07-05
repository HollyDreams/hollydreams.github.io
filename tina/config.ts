import { defineConfig } from "tinacms";

const branch =
	process.env.GITHUB_BRANCH ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,
	clientId: process.env.TINA_PUBLIC_CLIENT_ID,
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
				format: "md",/* 
				match: {
					include: "index", // This will match any index.md file inside subdirectories
				}, */
				ui: {
					allowedActions: {
						create: true,
            delete: true
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
            name: "category",
            label: "Category",
            required: true,
          },
					{
						type: "image",
						label: "Hero image",
						name: "imgSrc",
					},{
						label: "Tags",
						name: "tags",
						type: "object",
						fields: [
							{
								label: "Release Date",
								name: "releaseDate",
								type: "string"
							},
							{
								label: "Genre",
								name: "genreData",
								type: "object",
								fields: [
									{
										label: "Genre",
										name: "genre",
										type: "string"
									},
									{
										label: "Icon (see https://ionic.io/ionicons)",
										name: "genreIcon",
										type: "string"
									},]
							},
							{
								label: "Game Engine",
								name: "engine",
								type: "string"
							}
						]
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			}
		],
	},
});
